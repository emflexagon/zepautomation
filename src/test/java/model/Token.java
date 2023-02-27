package model;

public class Token {
    private String purpose;
    private String state;
    private String price;

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Token(String purpose, String state, String price) {
        this.purpose = purpose;
        this.state = state;
        this.price = price;
    }

    @Override
    public String toString() {
        return "{\n" +
                "    \"purpose\": \""+purpose+"\",\n" +
                "    \"state\": \""+state+"\",\n" +
                "    \"price\": \""+price+"\"\n" +
                "}";
    }
}
