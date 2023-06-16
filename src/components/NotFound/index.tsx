import React from "react";
import { NotFoundWrapper, NotFoundContainer, NotFoundContent } from "./style";

const index = () => {
  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <NotFoundContent>
          <h1>Nothing Found</h1>
          <div>
            <p>
              It seems we can’t find what you’re looking for. Perhaps searching
              can help.
            </p>
          </div>
          <form>
            <label>
              <span>Search for:</span>
              <input type="search" placeholder="Search …" name="s" />
            </label>
            <button>Search</button>
          </form>
        </NotFoundContent>
      </NotFoundContainer>
    </NotFoundWrapper>
  );
};

export default index;
