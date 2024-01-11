import type { PostReviewFormFieldValues } from "types/review";

import { useForm } from "react-hook-form";

import PostReviewFormView from "../View";

interface Props {
  onSubmit: (formFieldValues: PostReviewFormFieldValues) => void;
}

const PostReivewFormLogic = ({ onSubmit }: Props) => {
  const form = useForm<PostReviewFormFieldValues>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      content: "",
    },
  });
  return <PostReviewFormView form={form} onSubmit={onSubmit} />;
};

export default PostReivewFormLogic;
