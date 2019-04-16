package GL.CucumberJava;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:test-output" },
		features = "Feature/Log_In.feature",
		glue = { "GL/CucumberJava" },
		monochrome = true,
		strict = true,
		dryRun = false,
		tags = { "@Negative" }
		)

public class TestRunner {

}
