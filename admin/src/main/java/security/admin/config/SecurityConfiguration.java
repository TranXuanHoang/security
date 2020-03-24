package security.admin.config;

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
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            //.httpBasic().and()
            .formLogin(formLogin ->
                formLogin.permitAll()
            )
            .authorizeRequests(authorizeRequests ->
                authorizeRequests
                    // Uncomment the following line to allow access to the top page without logging in
                    // .antMatchers("/index.html", "/").permitAll()
                    .antMatchers("/admin/**").hasRole("ADMIN")
                    .anyRequest().authenticated()
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

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/**.js").antMatchers("/**.ico");
    }

    // @Override
    // protected void configure(HttpSecurity http) throws Exception {
    //     // @formatter:off
    //     http
    //         .httpBasic()
    //     .and()
    //         .authorizeRequests()
    //             .antMatchers("/index.html", "/").permitAll()
    //             .anyRequest().hasRole("ADMIN")
    //     .and()
    //         .csrf().disable();
    //     // @formatter:on
    // }
}