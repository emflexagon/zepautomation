package model;

public class Borrower {
    private String first_name;
    private String last_name;
    private String salutation;
    private String title;
    private String telephone_number;
    private String loan_questionnaire_id;
    private String is_main;
    private String household_situation_id;

    public Borrower(String first_name, String last_name, String salutation, String title, String telephone_number, String loan_questionnaire_id, String is_main, String household_situation_id) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.salutation = salutation;
        this.title = title;
        this.telephone_number = telephone_number;
        this.loan_questionnaire_id = loan_questionnaire_id;
        this.is_main = is_main;
        this.household_situation_id = household_situation_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getSalutation() {
        return salutation;
    }

    public void setSalutation(String salutation) {
        this.salutation = salutation;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTelephone_number() {
        return telephone_number;
    }

    public void setTelephone_number(String telephone_number) {
        this.telephone_number = telephone_number;
    }

    public String getLoan_questionnaire_id() {
        return loan_questionnaire_id;
    }

    public void setLoan_questionnaire_id(String loan_questionnaire_id) {
        this.loan_questionnaire_id = loan_questionnaire_id;
    }

    public String isIs_main() {
        return is_main;
    }

    public void setIs_main(String is_main) {
        this.is_main = is_main;
    }

    public String getHousehold_situation_id() {
        return household_situation_id;
    }

    public void setHousehold_situation_id(String household_situation_id) {
        this.household_situation_id = household_situation_id;
    }

    @Override
    public String toString() {
        return "{\n" +
                "    \"first_name\": \""+first_name+"\",\n" +
                "    \"last_name\": \""+last_name+"\",\n" +
                "    \"salutation\": \""+salutation+"\",\n" +
                "    \"title\": \""+title+"\",\n" +
                "    \"telephone_number\": \""+telephone_number+"\",\n" +
                "    \"loan_questionnaire_id\": \""+loan_questionnaire_id+"\",\n" +
                "    \"is_main\": \""+is_main+"\",\n" +
                "    \"household_situation_id\": \""+household_situation_id+"\"\n" +
                "}";
    }
}
