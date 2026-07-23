import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import "./EditSubject.css";

function EditSubject() {

  const { id } = useParams();
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [faculty, setFaculty] = useState("");
  const [semester, setSemester] = useState("");
  const [credits, setCredits] = useState("");


  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");



  // ==========================
  // Fetch Subject Details
  // ==========================

  useEffect(() => {
    fetchSubject();
  }, [id]);



  async function fetchSubject(){

    try{

      setLoading(true);
      setError("");

      const response = await api.get(`/subjects/${id}`);


      if(response.data.success){

        const subject = response.data.subject;


        setName(subject.name);
        setCode(subject.code);
        setFaculty(subject.faculty);
        setSemester(subject.semester);
        setCredits(subject.credits);

      }
      else{

        setError("Subject not found.");

      }


    }
    catch(error){

      console.error(error);


      if(error.response){

        setError(
          error.response.data.message ||
          "Unable to fetch subject."
        );

      }
      else{

        setError("Server not connected.");

      }

    }
    finally{

      setLoading(false);

    }

  }




  // ==========================
  // Update Subject
  // ==========================

  async function updateSubject(){


    if(
      !name.trim() ||
      !code.trim() ||
      !faculty.trim() ||
      !semester.trim() ||
      !credits
    ){

      alert("Please fill all fields.");
      return;

    }



    try{

      setUpdating(true);


      const response = await api.put(
        `/subjects/${id}`,
        {
          name,
          code,
          faculty,
          semester,
          credits
        }
      );



      if(response.data.success){

        alert("Subject updated successfully.");

        navigate("/subjects");

      }



    }
    catch(error){

      console.error(error);


      if(error.response){

        alert(
          error.response.data.message ||
          "Unable to update subject."
        );

      }
      else{

        alert("Server not connected.");

      }

    }
    finally{

      setUpdating(false);

    }

  }




  if(loading){

    return <h2>Loading subject details...</h2>;

  }



  if(error){

    return <h2>{error}</h2>;

  }



  return (

    <div className="edit-page">


      <h1>Edit Subject</h1>



      <input
        type="text"
        placeholder="Subject Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />



      <input
        type="text"
        placeholder="Subject Code"
        value={code}
        onChange={(e)=>setCode(e.target.value)}
      />



      <input
        type="text"
        placeholder="Faculty Name"
        value={faculty}
        onChange={(e)=>setFaculty(e.target.value)}
      />



      <input
        type="text"
        placeholder="Semester"
        value={semester}
        onChange={(e)=>setSemester(e.target.value)}
      />



      <input
        type="number"
        placeholder="Credits"
        value={credits}
        onChange={(e)=>setCredits(e.target.value)}
      />



      <button
        onClick={updateSubject}
        disabled={updating}
      >

        {
          updating 
          ? "Updating..."
          : "Update Subject"
        }

      </button>



    </div>

  );

}


export default EditSubject;