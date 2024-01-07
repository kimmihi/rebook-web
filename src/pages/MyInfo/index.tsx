import styled from "styled-components";

import withAuthentication from "hoc/withAuthentication";

import DashboardLayout from "components/DashboardLayout";
import Typography from "components/Typography";

import useMyInfo from "hooks/query/auth/useMyInfo";

import UserCard from "./UserCard";
import ReadingBookList from "./ReadingBookList";
import RegisterBook from "./RegisterBook";

const Box = styled.div``;

const MyInfo = () => {
  const { data, isLoading, isError } = useMyInfo();

  console.log(data);
  return (
    <DashboardLayout>
      <UserCard user={data} loading={isLoading} />
      <Box style={{ marginTop: "16px", lineHeight: "48px" }}>
        <Typography variant="sub-title">현재 읽고있는 책</Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <ReadingBookList />
          <RegisterBook />
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default withAuthentication(MyInfo);
