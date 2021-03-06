import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

// Account API ---------------------------------------------------------------------------------

//Get a account
export const getAccount = async () => {
  let data = null;
  await axios

    .get(`${URL}/Account`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};

// Update account
export const updateAccount = async (
  firstname,
  lastname,
  password,
  dob,
  studentid
) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/Account/Update`,
      {
        firstname: firstname,
        lastname: lastname,
        password: password,
        dob: dob,
        student_id: studentid,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const adminUpdateAccount = async (
  firstname,
  lastname,
  admin,
  dob,
  studentid,
  phone,
  email,
  id,
  gender,
  isban,
) => {

  let message = null;
  const test = await axios
    .post(
      `${URL}/Admin/Update`,
      {
        firstname: firstname,
        lastname: lastname,
        admin: admin,
        dob: dob,
        student_id: studentid,
        phone: phone,
        email: email,
        id: id,
        gender: gender,
        isban: isban,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};


//Classes API ----------------------------------------------------------------------------------

//Get All Class
export const getAllClass = async () => {
  let data = null;
  await axios

    .get(`${URL}/classes`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
export const getAllClassAdmin = async () => {
  let data = null;
  await axios

    .get(`${URL}/classes/getAllClasses`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
export const adminUpdateClass = async (
  id,
  name,
  subject,
  section,
  room,

) => {

  let message = null;
  const test = await axios
    .post(
      `${URL}/classes/updateClass`,
      {
        name: name,
        subject: subject,
        room: room,
        section: section,

        id: id,

      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
// Create a Class
export const createClass = async (name, Section, Subject, Room) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/classes/addClass`,
      {
        name: name,
        section: Section,
        subject: Subject,
        room: Room,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};

// Grade API  -------------------------------------------------------------------------------
export const getGrade = async () => {
  let data = null;
  await axios

    .get(`${URL}/Grade`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
export const getGradeOfStudentFromClass = async (id) => {
  let data = null;
  await axios

    .get(`${URL}/Grade/GetAllGradeOfStudent/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
export const getAllGradeFromClass = async (id) => {
  let data = null;
  await axios

    .get(`${URL}/Grade/getAllGradeFromClass/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
export const UpdateGrades = async (ListGrade) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/Grade/UpdateGrades`,
      {
        data: ListGrade,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};

//get HomeWork
export const getHomeWorks = async (id) => {
  let data = null;
  await axios

    .get(`${URL}/HomeWork/GetHomeWorkByClassID?classid=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
//create HomeWork
export const createHomeWork = async (data) => {
  let message = null;
  const test = await axios
    .post(`${URL}/HomeWork/AddHomeWork`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const UpdateHomeWork = async (data) => {
  let message = null;
  const test = await axios
    .post(`${URL}/HomeWork/UpdateHomeWork`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const RemoveHomeWork = async (data) => {
  let message = null;
  const test = await axios
    .post(`${URL}/HomeWork/RemoveHomeWork`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};

// Class Account API ---------------------------------------------------------------------
export const getAllAccountFromClass = async (id) => {
  let data = null;
  await axios

    .get(`${URL}/classesaccount/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
export const getAllAccount = async () => {
  let data = null;
  await axios

    .get(`${URL}/Account/getAll`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
//Check teacher
export const CheckTeacher = async (id) => {
  let data = null;
  await axios

    .get(`${URL}/classesaccount/checkTeacher/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
//Check Admin
export const CheckAdmin = async () => {
  let data = null;
  await axios

    .get(`${URL}/Account/isAdmin`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};

// Login API ---------------------------------------------------------------------------
export const Login = async (name, password) => {
  let message = null;
  const test = await axios
    .post(`${URL}/login`, {
      username: name,
      password: password,
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const Register = async (
  firstname,
  lastname,
  email,
  password,
  phone,

  dob,
  gender
) => {
  let message = null;
  const test = await axios
    .post(`${URL}/register`, {
      firstname: firstname,
      lastname: lastname,
      username: email,
      password: password,
      phone: phone,

      dob: dob,
      gender: gender,
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};

// Grade Structure API ---------------------------------------------------------------------

export const getGradeStructure = async (id) => {
  let data = null;

  await axios
    .get(`${URL}/GradeStructure/GetStructure/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};

export const addStructure = async (idclass, description, grade) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/GradeStructure/AddStructure/${idclass}`,
      {
        description: description,
        grade: parseInt(grade),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};

export const removeStructure = async (id) => {
  let message = null;
  const test = await axios
    .post(`${URL}/GradeStructure/RemoveStructure`, { id: id }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const updateStructure = async (id,submit) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/GradeStructure/UpdateStructure`, {
         id: id,
         description: submit.description,
         grade: submit.grade
         },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
// 
export const postListStudent = async (listStudentData, classId) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/classes/addStudentList`,
      {
        listStudentData: listStudentData,
        classId: classId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const postHomeWordGrade = async (homeworkData, classId, homeworkId) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/homeWork/UploadScore`,
      {
        homeworkData: homeworkData,
        classId: classId,
        homeworkId: homeworkId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
/*Long-TP ADD START 2022/1/3*/
export const postMakeDoneHomeWork = async (homeworkId) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/homeWork/MakeDone`,
      {
        homeWorkID: homeworkId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const postInProcessHomeWork = async (homeworkId) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/homeWork/InProcess`,
      {
        homeWorkID: homeworkId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const postReviewRequest = async (homeworkId,idaccount,expectationGrade,expectationMess,grade) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/homeWork/ReviewRequest`,
      {
        homeWorkID: homeworkId,
        idaccount: idaccount,
        expectationGrade: expectationGrade,
        expectationMess: expectationMess,
        oldGrade: grade
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const postReviewResponse= async (homeworkId,idaccount,finalgrade,teachermess) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/homeWork/ReviewResponse`,
      {
        homeWorkID: homeworkId,
        idaccount: idaccount,
        finalgrade: finalgrade,
        teachermess: teachermess,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};

export const getReviewGrade = async (homeWorkID,idaccount) => {
  let data = null;
  try{

 
  await axios

    .get(`${URL}/HomeWork/GetReviewGrade?homeWorkID=${homeWorkID}&idaccount=${idaccount}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });
  }
  catch(err){
    console.log(err)
  }
  return data;
};

export const GetAllReviewRequest = async (idclass) => {
  let data = null;
  try{
  await axios
    .get(`${URL}/HomeWork/GetAllReviewRequest?idclass=${idclass}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });
  }
  catch(err){
    console.log(err)
  }
  return data;
};
export const GetReviewComment = async (homeWorkID,idaccount) => {
  let data = null;
  try{

 
  await axios

    .get(`${URL}/HomeWork/GetReviewComment?homeWorkID=${homeWorkID}&idaccount=${idaccount}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });
  }
  catch(err){
    console.log(err)
  }
  return data;
};

export const AddReviewComment= async (homeWorkID,idaccount,content,isteacher) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/homeWork/AddReviewComment`,
      {
        homeWorkID: homeWorkID,
        idaccount: idaccount,
        content: content,
        isteacher: isteacher,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
{ /*Long-TP ADD END 2022/1/3*/}

