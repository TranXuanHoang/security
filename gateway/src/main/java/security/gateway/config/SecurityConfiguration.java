package security.gateway.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    // // @formatter:off
    // @Override
    // protected void configure(HttpSecurity http) throws Exception {
    //     http
    //         //.httpBasic().and()
    //         .authorizeRequests(authorizeRequests ->
    //             authorizeRequests
    //                 .antMatchers("/index.html", "/", "/home", "/login", "/resources/**", "/**.js", "/**.ico").permitAll()
    //                 .anyRequest().authenticated()//.hasRole("USER")
    //         )
    //         .formLogin(formLogin ->
    //             formLogin
    //                 .loginPage("/login")
    //                 .permitAll()
    //         )
    //         .sessionManagement(sessionManagement ->
    //             sessionManagement
    //                 .sessionConcurrency(sessionConcurrency ->
    //                     sessionConcurrency
    //                         .maximumSessions(1)
    //                         .expiredUrl("/login?expired")
    //                 ).sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
    //         )
    //         .csrf(csrfCustomizer -> 
    //             csrfCustomizer
    //                 .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
    //         );
    // }
    // // @formatter:on

    // @formatter:off
    // tag::config[]
    @Override
    protected void configure(HttpSecurity http) throws Exception {
      http
          .httpBasic()
            .and()
          .authorizeRequests()
            .antMatchers("/index.html", "/", "/home", "/login").permitAll()
            .anyRequest().authenticated()
            .and()
          .csrf()
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }
    // end::config[]
    // @formatter:on

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/**.js").antMatchers("/**.ico");
    }
}