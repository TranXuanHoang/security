package security.gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import org.springframework.core.annotation.Order;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;

@Configuration
@EnableWebSecurity
@Order(SecurityProperties.BASIC_AUTH_ORDER)
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

    /**
     * Create user accounts to keep the sample application self-contained.
     * In the Gateway we only need to ensure that our user accounts have the roles needed,
     * but the Gateway doesn’t need to know how to interpret it.
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
      // super.configure(auth);
      auth.inMemoryAuthentication()
        .withUser("user")
          .password(passwordEncoder().encode("asdf1234"))
          .roles("USER")
          .and()
        .withUser("admin")
          .password(passwordEncoder().encode("admin"))
          .roles("USER", "ADMIN", "READER", "WRITER")
          .and()
        .withUser("audit")
          .password(passwordEncoder().encode("audit"))
          .roles("USER", "ADMIN", "READER");
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
      return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}