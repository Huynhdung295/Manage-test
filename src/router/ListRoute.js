import CreateUserPage from "../page/CreateUserPage";
import ListUserPage from "../page/ListUserPage";

export const AdminRoute = [
  {
    path: "/laydanhsachnguoidung",
    label: "List User",
    component: <ListUserPage />,
  },
  {
    path: "/themnguoidung",
    label: "Create User",
    component: <CreateUserPage />,
  },
];
