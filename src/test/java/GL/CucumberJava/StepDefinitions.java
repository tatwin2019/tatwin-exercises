package GL.CucumberJava;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinitions {
	
	static WebDriver driver;
	
	@Before
	public void setUp() {
		System.setProperty("webdriver.gecko.driver", "C:\\Projects\\selenium\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Given("^User opens Wikipedia page$")
	public void user_opens_Wikipedia_page() throws Throwable {		
		driver.get("https://pl.wikipedia.org");		
		Thread.sleep(2000);
	}

	@When("^User clicks on search textbox$")
	public void user_clicks_on_search_textbox() {
	    // Write code here that turns the phrase above into concrete actions
		
	}

	@When("^User types \"([^\"]*)\" to search textbox$")
	public void user_provides_a_text(String text) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement searchTextBox = driver.findElement(By.id("searchInput"));
		searchTextBox.sendKeys(text);
	}

	@When("^User clicks on search button$")
	public void user_clicks_on_search_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement searchButton = driver.findElement(By.className("searchButton"));
		searchButton.click();
	}

	@Then("^Article is displayed$")
	public void article_is_displayed() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement title = driver.findElement(By.id("firstHeading"));
		String word = title.getText(); 

		Assert.assertEquals(word, "Selen");
	}
	
	@When("^User goes to Log in page$")
	public void user_goes_to_Log_in_page() {
		WebElement login = driver.findElement(By.id("pt-login"));
		login.click();
	}

	@Then("^Log in page is displayed$")
	public void log_in_page_is_displayed() {
		Assert.assertEquals("Zaloguj się", driver.findElement(By.id("firstHeading")).getText());
	}

	@When("^User types \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_types_and(String username, String password) {
		WebElement loginTB = driver.findElement(By.id("wpName1"));
		WebElement passTB = driver.findElement(By.id("wpPassword1"));
		loginTB.sendKeys(username);
		passTB.sendKeys(password);
	}
	
	@When("^User types username and password$")
	public void user_types_and(DataTable credentials) throws Throwable {
		WebElement loginTB = driver.findElement(By.id("wpName1"));
		WebElement passTB = driver.findElement(By.id("wpPassword1"));
		//List<String> data = credentials.asList(String.class);

		
		
		for(Map<String, String> data : credentials.asMaps(String.class, String.class)) {		
			loginTB.sendKeys(data.get("username"));
			passTB.sendKeys(data.get("password"));
		}
		Thread.sleep(2000);
	}

	@When("^User clicks on Log in button$")
	public void user_clicks_on_Log_in_button() {
		WebElement loginButton = driver.findElement(By.id("wpLoginAttempt"));
		loginButton.click();
	}

	@Then("^User is logged and \"([^\"]*)\" is displayed$")
	public void user_is_logged_and_is_displayed(String username) {
		WebElement loggedUser = driver.findElement(By.xpath("//li[@id='pt-userpage']/a[@class='new']"));
		Assert.assertEquals(username, loggedUser.getText());
	}
	
	@Then("^User gets error message$")
	public void user_gets_error_message() {
		WebElement loginError = driver.findElement(By.className("error"));
		Assert.assertEquals("Podany login lub hasło są nieprawidłowe. Spróbuj jeszcze raz.", loginError.getText());
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}

}
