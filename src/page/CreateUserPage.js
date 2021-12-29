import React from "react";
import { toast } from "react-toastify";
function CreateUserPage() {
  return (
    <div>
      <button onClick={() => toast('dataUser')}>Click</button>
    </div>
  );
}

export default CreateUserPage;
