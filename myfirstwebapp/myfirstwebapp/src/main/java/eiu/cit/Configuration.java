package eiu.cit;

import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.naming.NamingException;
import javax.xml.bind.DatatypeConverter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoder;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class Configuration {
	// The secret key. This should be in a property file NOT under source
	// control and not hard coded in real life. We're putting it here for
	// simplicity.

	private static String SECRET_KEY = "o1+RpTBajQoYsbygvf2FclumKH88XhOpo3VHKFkGyz0=";
	private static final long ttlMillis = 600000; // ten minutes

	private Configuration()  {}

	public static String issueToken(String login, String role) throws NoSuchAlgorithmException {
		
		long nowMillis = System.currentTimeMillis();
		Date now = new Date(nowMillis);

		// We will sign our JWT with our ApiKey secret
		byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
		
		JwtBuilder builder = Jwts.builder().claim("login", login).claim("role", role)
				.signWith(Keys.hmacShaKeyFor(apiKeySecretBytes));

		// if it has been specified, let's add the expiration
		if (ttlMillis >= 0) {
			long expMillis = nowMillis + ttlMillis;
			Date exp = new Date(expMillis);
			builder.setExpiration(exp);
		}

		return builder.compact();

	}

	public static Claims decodeJWT(String jwt) throws NoSuchAlgorithmException {
		byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
		
		Claims claims = Jwts.parserBuilder()
				.setSigningKey(apiKeySecretBytes)
				.build()
				.parseClaimsJws(jwt)
				.getBody();
		return claims;
	}

}
