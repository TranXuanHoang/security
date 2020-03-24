package security.resource;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.bind.annotation.RequestMethod;


@SpringBootApplication
@RestController
public class ResourceApplication {
	private List<Change> changes = new ArrayList<>();

	public static void main(String[] args) {
		SpringApplication.run(ResourceApplication.class, args);
	}

	@RequestMapping(value="/greeting", method=RequestMethod.GET)
	@CrossOrigin(origins = "*", maxAge = 3600,
		allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
	public Message greeting() {
		Message message = new Message("Hello World Backend");
		System.out.println(message);
		return message;
	}

	@RequestMapping(value="/greeting", method=RequestMethod.POST)
	public Message updateGreeting(@RequestBody Message map, Principal principal) {
		String message = "Hello World";

		if (map.getContent() != null) {
			message = map.getContent();
			changes.add(new Change(principal.getName(), message));

			if (changes.size() > 10) {
				changes.remove(0);
			}
		}

		return new Message(message);
	}

	@RequestMapping(value="/changes", method=RequestMethod.GET)
	@CrossOrigin(origins = "*", maxAge = 3600,
		allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
	public List<Change> changes() {
		return changes;
	}

}

@Data
@ToString
@NoArgsConstructor
class Message {
	private String id;
	private String content;

	public Message(String content) {
		this.id = UUID.randomUUID().toString();
		this.content = content;
	}
}

@Data
@ToString
@NoArgsConstructor
class Change {
	private Date timestamp;
	private String user;
	private String message;

	public Change(String user, String message) {
		this.user = user;
		this.message = message;
		this.timestamp = new Date();
	}
}