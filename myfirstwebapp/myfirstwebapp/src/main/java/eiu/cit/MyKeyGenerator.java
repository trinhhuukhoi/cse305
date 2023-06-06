package eiu.cit;

import java.util.Base64;

import javax.crypto.KeyGenerator;

public class MyKeyGenerator {
	
	private static final String CIPHER = "AES";
	
	public static void main(String[] args) throws Exception {
	
	KeyGenerator keyGenerator = KeyGenerator.getInstance(CIPHER);
	keyGenerator.init(256);
	
	System.out.println(Base64.getEncoder().encodeToString(keyGenerator.generateKey().getEncoded()));
	}
}

