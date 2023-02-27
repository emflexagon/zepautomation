package common.methods;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import model.Token;
import org.junit.Assert;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.Random;

import static io.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;

public class CommonMethods {

    public static Response response;
    public  static ResponseBody responseBody;
    public static RequestSpecification httpRequest;
    public static String endpoint;
    public static String jsonAsString;
    public static String url;
    public static String username;
    public static String password;
    public static String userId;
    public static String tokenId;
    public static String questinerrie_id;


    public static void postMethod(Object user){
        response = given()
                .header("Content-Type","application/json")
                .header("Authorization","Bearer "+tokenId)
                .body(user.toString()).when().post(endpoint).then().extract().response();
    }

    public static void putMethod(Object user){
        response = given().body(user.toString()).when().put(endpoint).then().extract().response();
    }

    public static void getMethod(){
        given().when().get(endpoint).then().extract().response();
    }

    public static void deleteMethod(){
        response = given().when().delete(endpoint).then().extract().response();
    }

    public static void responseStatusCodeValidation(int statuscode){
        System.out.println("Response body"+response.body().asString());
        assertEquals(statuscode,response.statusCode());
    }

    public static void responseBodyAttributeValidation(String attr1){
        assertEquals(attr1,response.jsonPath().getString(attr1));
    }

    public static String getresponseBodyAttribute(String attri){
        return response.jsonPath().getString(attri);
    }

    public static void readConfigType() throws IOException {
        InputStream input = new FileInputStream("src/test/resources/config.properties");
        Properties prop = new Properties();
        prop.load(input);
        url = prop.getProperty("URL");
        username= prop.getProperty("username");
        password= prop.getProperty("password");
    }


    public static void initiateurl(String ep){
        RestAssured.baseURI = url;
        endpoint=ep;
    }

    public static void fetchBearertoken(){
        Token token = new Token("buyHouse","burgenland", "120000");
        httpRequest = given().auth().preemptive().basic(username,password)
                .header("Content-Type","application/json")
                .body(token.toString());
        response = httpRequest.post("https://api.dev.baufi.zeb-applied.com/api/v1/questionnaire/initialize");
        responseBody = response.body();
        String tokenbody = responseBody.asString();
        JsonPath jsonPathEvaluator = response.jsonPath();
        tokenId = jsonPathEvaluator.get("token");
        questinerrie_id=jsonPathEvaluator.get("loan_questionnaire.id");
        Assert.assertEquals("Bearer token status code validation",response.statusCode(),201);

    }
}
