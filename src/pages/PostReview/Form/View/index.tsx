import type { UseFormReturn } from "react-hook-form";
import type { PostReviewFormFieldValues } from "types/review";

import styled from "styled-components";

import Button from "components/Button";
import TextField from "components/TextField";
import TextArea from "components/TextArea";

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

interface Props {
  form: UseFormReturn<PostReviewFormFieldValues>;
  onSubmit: (formFieldValues: PostReviewFormFieldValues) => void;
}

const PostReviewFormView = ({ form, onSubmit }: Props) => {
  const { formState, register, handleSubmit } = form;

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="제목"
        placeholder="제목을 입력해주세요."
        error={!!formState.errors.title}
        helperText={formState.errors.title?.message}
        {...register("title")}
      />
      <TextArea
        label="내용"
        rows={10}
        placeholder="내용을 입력해주세요."
        style={{ marginTop: "24px" }}
        error={!!formState.errors.content}
        helperText={formState.errors.content?.message}
        {...register("content")}
      />
      <Actions>
        <Button variant="contained" color="warning" type="submit">
          작성
        </Button>
      </Actions>
    </form>
  );
};

export default PostReviewFormView;
