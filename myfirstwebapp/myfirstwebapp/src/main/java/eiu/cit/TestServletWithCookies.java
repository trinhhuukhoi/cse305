package eiu.cit;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



	@WebServlet(name = "testServletWithCookies", urlPatterns = { "/cookie" }, loadOnStartup = 1)
	public class TestServletWithCookies  extends HttpServlet {

		private static final long serialVersionUID = 1L;

		@Override
		protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			resp.setContentType("text/html");
			StringBuilder report = new StringBuilder();

			Cookie ck[] = req.getCookies();
			if (ck != null && ck[0].getName().equals("login")) {
				    report.append("Welcome back ".concat(ck[0].getValue()));
					PrintWriter writer = resp.getWriter();
					writer.println(report);

			} else {
				resp.setStatus(302);
			}
		
		}

		
	}
	
	
