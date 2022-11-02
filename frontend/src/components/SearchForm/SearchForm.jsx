import "./SearchForm.css";
import React from "react";
import { useForm } from "react-hook-form";
import { TweetsApi } from "../../api/tweetsApi";
import { tweets } from "../../store/tweetsSlice";
import { useSelector, useDispatch } from "react-redux";
import { searchForm } from "../../store/searchFormSlice";

export default function SearchForm() {
  const dispatch = useDispatch();
  const { darkThemeState } = useSelector((state) => state.themeState);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { inputSearchForm: "" },
  });

  const inputSearchForm = watch("inputSearchForm");

  const onSubmit = () => {
    TweetsApi.getTweets(inputSearchForm)
      .then((res) => {
        console.log("RES", res);
        const mediaAndTweetsId = res.data.map((data) => {
          const mediaKeys = {};
          if (data.attachments) {
            // very rare the attachments don't coming from API
            for (let i = 0; i < data.attachments.media_keys.length; i++) {
              mediaKeys[i] = data.attachments.media_keys[i];
            }
            return {
              ...mediaKeys,
              tweetId: data.id,
              authorId: data.author_id,
            };
          } else {
            for (let i = 0; i < data.entities.urls.length; i++) {
              mediaKeys[i] = data.entities.urls[i];
            }
            return {
              ...mediaKeys,
              tweetId: data.id,
              authorId: data.author_id,
            };
          }
        });

        const userName = mediaAndTweetsId.map((el, i) => {
          return {
            ...res.includes.users.find((item) => {
              return item.id === el.authorId ? item.username : null;
            }),
            ...el,
          };
        });

        const tweetInfo = res.includes.media.map((item) => {
          return {
            ...userName.filter((el) =>
              Object.values(el).some((media) => {
                return media === item.media_key;
              })
            ),
            ...item,
          };
        });
        dispatch(tweets(tweetInfo));
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(searchForm(inputSearchForm));
    // dispatch(hashtag(''));
    setValue("inputSearchForm", "");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          darkThemeState ? "searchform searchform_dark-theme" : "searchform"
        }
      >
        <input
          {...register("inputSearchForm", {
            required: "Keyword or hashtag required",
          })}
          className={
            darkThemeState
              ? "searchform__input searchform__input_dark-theme"
              : "searchform__input"
          }
          type="text"
          placeholder="Find hashtag or put some word"
          aria-label="Find hashtag or put some word"
        ></input>
        <button className="searchform__submit" type="submit"></button>
      </form>
      <p
        className={
          darkThemeState
            ? "searchform__error searchform__error_dark-theme"
            : "searchform__error"
        }
      >
        {errors?.inputSearchForm?.message}
      </p>
    </>
  );
}
