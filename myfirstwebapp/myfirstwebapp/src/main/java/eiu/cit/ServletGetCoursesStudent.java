package eiu.cit;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
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

import org.json.JSONArray;
import org.json.JSONObject;

import io.jsonwebtoken.Claims;

@WebServlet(name = "getCoursesStudent", urlPatterns = {"/courses_student"}, loadOnStartup = 1)
public class ServletGetCoursesStudent extends HttpServlet {

    private final static String url = "jdbc:mysql://localhost:3306/myfirstwebapp"; // table details
    private final static String username = "eiu";
    private final static String password = "4#Eiumysql";

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");

        Cookie ck[] = req.getCookies();
        if (ck != null && ck[0].getName().equals("login")) {

            Claims claims = null;
            try {
                claims = Configuration.decodeJWT(ck[0].getValue());
                
                if (claims.get("role").equals("student")) {
                Object user = claims.get("login");
                String query = "SELECT code, name FROM enrolment" + " "
                        + "LEFT JOIN course on course_id = enrolment.course" + " "
                        + "LEFT JOIN account on login = enrolment.account" + " " 
                        + "WHERE login= ?";
                
                 Connection con;
        
                Class.forName("com.mysql.cj.jdbc.Driver");
                con = DriverManager.getConnection(url, username, password);
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, (String) user);
                ResultSet rs = st.executeQuery();

                JSONArray objArray = new JSONArray();
                
                    while (rs.next()) {
                        JSONObject obj = new JSONObject();
                        obj.put("code", rs.getString("code"));
                        obj.put("name", rs.getString("name"));
                        objArray.put(obj);

                    }
                
                st.close();
                con.close();

                PrintWriter writer = resp.getWriter();
                writer.println(objArray);
                } else {
                     resp.setStatus(302);
                }
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();

            } catch (ClassNotFoundException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
        
            } catch (NoSuchAlgorithmException e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();
            } 
            
           

        } else {
            resp.setStatus(302);
        }

    }

}
