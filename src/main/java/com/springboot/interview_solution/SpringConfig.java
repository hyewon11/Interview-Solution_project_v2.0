package com.springboot.interview_solution;

import com.springboot.interview_solution.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;



@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SpringConfig extends WebSecurityConfigurerAdapter {
    private final UserService userService;

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web) throws Exception{
        web.ignoring().antMatchers("/css/**","/js/**","/Semantic-UI-master/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.authorizeRequests()
                .antMatchers("/signup","/userIdCheck","/searchSchool", "/signin", "/main").permitAll()
                .and().formLogin().permitAll() // 로그인관련 설정을 진행합니다.
                .loginPage("/signin")
                .usernameParameter("userID")
                .passwordParameter("password")
                .loginProcessingUrl("/signin")
                .defaultSuccessUrl("/resultSignin")
                .and().logout()
                .logoutUrl("/signout")
                .logoutSuccessUrl("/signin")
                .permitAll()
                .and().csrf().ignoringAntMatchers("/userIdCheck","/searchSchool", "/questionList","/myQuestionList","/infoStudent/**","/student/interview/question/record","/student/interview/question/stop");
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }
}
