package security.resource.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            //.httpBasic().and()
            .authorizeRequests(authorizeRequests ->
                authorizeRequests.anyRequest().authenticated()//.hasRole("USER")
            )
            .formLogin(formLogin ->
                formLogin.permitAll()
            )
            .sessionManagement(sessionManagement ->
                sessionManagement
                    .sessionConcurrency(sessionConcurrency ->
                        sessionConcurrency
                            .maximumSessions(1)
                            .expiredUrl("/login?expired")
                    ).sessionCreationPolicy(SessionCreationPolicy.NEVER)
            )
            .csrf(csrfCustomizer -> 
                csrfCustomizer
                    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            );
    }
}