import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const backendUrl = process.env.REACT_APP_BACKEND_URL||'https://full-stack-trading-platform-backend.onrender.com';

  const URL = `${backendUrl}/api/auth/register`; 
  console.log("Registration URL:", URL); // Log the URL to confirm it's correct

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setIsSubmitting(true); // Disable submit button during form submission
  
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} `);
      }
      
     
      const data = await response.json();
      console.log("Response data:", data); // Log response
  
      // Check if the response contains a token (success)
      if (data && data.token) {
        storeTokenInLS(data.token);
        toast.success("Registration successful!");
        window.location.href = "http://localhost:5173"; // Redirect to the desired external URL      } else {
        toast.error("Registration failed! Please try again.");
      }
    } catch (error) {
      console.error("Error during Signup:", error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };
  

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="media/images/register.png"
                alt="A girl trying to register"
                width="500"
                height="500"
              />
            </div>

            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
