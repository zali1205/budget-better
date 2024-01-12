package com.budgetbetter.backendapi.security;

import java.util.List;
import java.util.Optional;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtToPrincipalConverter {

    private final UserRepository userRepository;

    public UserPrincipal convert(DecodedJWT jwt) {

        Optional<UserEntity> user = userRepository.findById(Long.parseLong(jwt.getSubject()));

        if (user.isEmpty()) {
            throw new AccessDeniedException("TESTING");
        }

        return UserPrincipal.builder()
                .userId(Long.parseLong(jwt.getSubject()))
                .email(jwt.getClaim("e").asString())
                .authorities(extractAuthoritiesFromClaim(jwt))
                .build();
    }

    private List<SimpleGrantedAuthority> extractAuthoritiesFromClaim(DecodedJWT jwt) {
        var claim = jwt.getClaim("a");
        if (claim.isNull() || claim.isMissing()) {
            return List.of();
        }
        return claim.asList(SimpleGrantedAuthority.class);
    }
}
