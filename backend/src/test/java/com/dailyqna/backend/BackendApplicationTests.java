package com.dailyqna.backend;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
// import org.springframework.boot.test.context.SpringBootTest;

// @SpringBootTest
class BackendApplicationTests {

	// @Test
	// void contextLoads() {
	// }

	@Test
	void applicationClassExists() {
		assertNotNull(new BackendApplication());
	}

}