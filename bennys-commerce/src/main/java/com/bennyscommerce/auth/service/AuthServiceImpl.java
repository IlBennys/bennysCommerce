package com.bennyscommerce.auth.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bennyscommerce.auth.entity.Erole;
import com.bennyscommerce.auth.entity.Role;
import com.bennyscommerce.auth.entity.User;
import com.bennyscommerce.auth.exception.MyAPIException;
import com.bennyscommerce.auth.payload.LoginDto;
import com.bennyscommerce.auth.payload.RegisterDto;
import com.bennyscommerce.auth.repository.RoleRepository;
import com.bennyscommerce.auth.repository.UserRepository;
import com.bennyscommerce.auth.security.JwtTokenProvider;
import com.bennyscommerce.model.Carrello;
import com.bennyscommerce.repository.CarrelloDao;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    @Autowired
    private CarrelloDao carrelloDao;

    @Autowired
    @Qualifier("FakeCarrello")
    private ObjectProvider<Carrello> objCarrello;

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public String login(LoginDto loginDto) {

	Authentication authentication = authenticationManager
		.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));

	SecurityContextHolder.getContext().setAuthentication(authentication);

	String token = jwtTokenProvider.generateToken(authentication);

	return token;
    }

    @Override
    public String register(RegisterDto registerDto) {

	if (userRepository.existsByUsername(registerDto.getUsername())) {
	    throw new MyAPIException(HttpStatus.BAD_REQUEST, "Username is already exists!.");
	}

	if (userRepository.existsByEmail(registerDto.getEmail())) {
	    throw new MyAPIException(HttpStatus.BAD_REQUEST, "Email is already exists!.");
	}

	User user = new User();
	user.setFirstname(registerDto.getFirstname());
	user.setLastname(registerDto.getLastname());
	user.setUsername(registerDto.getUsername());
	user.setEmail(registerDto.getEmail());
	user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
	user.setDataNascita(registerDto.getDataNascita());
	user.setIndirizzo(registerDto.getIndirizzo());
	user.setNumeroTelefono(registerDto.getNumeroTelefono());

	Set<Role> roles = new HashSet<>();

	// Per registrare tutti come USER di Default commentare IF
	if (registerDto.getRoles() != null) {
	    registerDto.getRoles().forEach(role -> {
		Role userRole = roleRepository.findByErole(getRole(role)).get();
		roles.add(userRole);
	    });
	} else {
	    Role userRole = roleRepository.findByErole(Erole.ROLE_USER).get();
	    roles.add(userRole);
	}

	user.setRoles(roles);
	Carrello c = objCarrello.getObject();
	carrelloDao.save(c);
	user.setCarrello(c);
	userRepository.save(user);

	return "User registered successfully!";
    }

    public Erole getRole(String role) {
	if (role.equals("ROLE_ADMIN"))
	    return Erole.ROLE_ADMIN;
	else
	    return Erole.ROLE_USER;
    }
}
