import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { classNames } from "./className";

export default function UsersReviewsOverView(props) {
  const reviews = props.reviews;
  return (
    <div className="px-5 lg:px-10 my-10 max-w-[600px]">
      <h2 className="my-5 text-xl">Users Ratings</h2>
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviews.average > rating ? "text-yellow-400" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-2 text-sm font-medium text-gray-900">
          {reviews.average} out of 5
        </p>
      </div>

      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {reviews.totalCount} Global ratings
      </p>

      {[1, 2, 3, 4, 5].map((rating) => (
        <div key={rating} className="flex items-center mt-4">
          <span className="text-sm font-medium text-grey-600">
            {rating} star
          </span>
          <div className="mx-4 w-2/4 h-5 bg-gray-200 rounded">
            <div
              style={{ width: "70%" }}
              className="h-5 bg-yellow-400 rounded"
            ></div>
          </div>
          <span className="text-sm font-medium text-grey-600">70%</span>
        </div>
      ))}
    </div>
  );
}
