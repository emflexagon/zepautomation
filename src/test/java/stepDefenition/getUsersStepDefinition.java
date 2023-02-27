package stepDefenition;


import common.methods.CommonMethods;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import model.Borrower;


/*
 * Created By : Elen Thendral Purpose : Step defenition
 */
public class getUsersStepDefinition {
	public static Response response;
	public static RequestSpecification httpRequest;
	public static String endpoint;
	public static String jsonAsString;
	public static String url;
	public static String userId;
	public static String randomName;



	@Given("^The USER fetches the bearer token with the given endpoint$")
	public void The_USER_fetches_the_bearer_token_with_the_given_endpoint() throws Throwable{
		CommonMethods.readConfigType();
		CommonMethods.fetchBearertoken();
	}

	@Given("^fetch the borrower \"([^\"]*)\"$")
	public void fetch_the_borrower(String endpoint) throws Throwable {
		CommonMethods.initiateurl(endpoint.replace("{questionnaire_id}",CommonMethods.questinerrie_id));
	}

	@Given("^Fetch the payload for the borrower with attributes \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" and execute the service$")
	public void fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String  first_name, String last_name, String salutation, String title, String telephone_number, String loan_questionnaire_id, String is_main, String household_situation_id) throws Throwable {
		Borrower borrower = new Borrower(first_name,last_name,salutation,title,telephone_number,loan_questionnaire_id,is_main,household_situation_id);
		borrower.setFirst_name(first_name);
		borrower.setLast_name(last_name);
		borrower.setSalutation(salutation);
		borrower.setTitle(title);
		borrower.setTelephone_number(telephone_number);
		borrower.setLoan_questionnaire_id(loan_questionnaire_id.replace("{questionnaire_id}",CommonMethods.questinerrie_id));
		borrower.setIs_main(is_main);
		borrower.setHousehold_situation_id(household_situation_id);
		CommonMethods.postMethod(borrower.toString());
		System.out.println("Body****"+borrower.toString());
	}

	@Then("^Validate the response code for borrower$")
	public void validate_the_response_code_for_borrower() throws Throwable {
		CommonMethods.responseStatusCodeValidation(201);

	}

	@Then("^Validate the response code for borrower to check for error code and error message$")
	public void validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message() throws Throwable {

		CommonMethods.responseStatusCodeValidation(422);
	}

}
