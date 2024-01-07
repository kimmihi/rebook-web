import DashboardLayout from "components/DashboardLayout";

import useMyInfo from "hooks/query/auth/useMyInfo";

import UserCard from "./UserCard";

const MyInfo = () => {
  const { data, isLoading, isError } = useMyInfo();

  console.log(data);
  return (
    <DashboardLayout>
      <UserCard user={data} loading={isLoading} />
    </DashboardLayout>
  );
};

export default MyInfo;
