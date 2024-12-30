import React from "react";

const Slam = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=600")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "500px",
          margin: "0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#FF69B4",
            marginBottom: "20px",
          }}
        >
          My Slam Book
        </h1>
        <form>
          {/* Name Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "1px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          {/* Date of Birth */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Date of Birth:</label>
            <input
              type="date"
              style={{
                width: "100%",
                padding: "1px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          {/* Nickname */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Nickname:</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "1px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          {/* Address */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Address:</label>
            <textarea
              rows="3"
              style={{
                width: "100%",
                padding: "1px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></textarea>
          </div>
          {/* Gender */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Gender:</label>
            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
          </div>
          {/* Favorite Actors */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Favorite Actors:</label>
            <div>
              <label>
                <input type="checkbox" value="Vijay" /> Vijay
              </label>
              <label style={{ marginLeft: "10px" }}>
                <input type="checkbox" value="Ajith" /> Ajith
              </label>
              <label style={{ marginLeft: "10px" }}>
                <input type="checkbox" value="Rajini Kanth" /> Rajini Kanth
              </label>
              <label style={{ marginLeft: "10px" }}>
                <input type="checkbox" value="Kamal Haasan" /> Kamal Haasan
              </label>
            </div>
          </div>
          {/* School */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>School:</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "1px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          {/* Memories */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Memories:</label>
            <textarea
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></textarea>
          </div>
          {/* Submit Button */}
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#FF69B4",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Slam;
