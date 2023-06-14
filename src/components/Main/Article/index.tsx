import React from "react";

import {
  ArticleWrapper,
  ArticleContainer,
  ArticleContent,
  ImageBox,
  Image,
  Post,
  Title,
  TitleLink,
  Meta,
  Content,
  AvatarBox,
  AvatarLink,
  Avatar,
  PostMeta,
  PostBy,
  PostMetaLink,
  PostDate,
  PostCategory,
  Date,
  Category,
  Like,
} from "./style";

const Article = () => {
  return (
    <ArticleWrapper>
      <ArticleContainer>
        <ArticleContent>
          <ImageBox to="#">
            <Image
              src="https://fudspam.com/wp-content/uploads/2022/12/photo_2022-12-09_08-47-21.jpg"
              alt="badge"
            />
          </ImageBox>
          <Post>
            <Title>
              <TitleLink to="#">Gmail Cookies Grab Page</TitleLink>
            </Title>
            <Meta>
              <AvatarBox>
                <AvatarLink to="#">
                  <Avatar
                    src="https://secure.gravatar.com/avatar/f018aade7796783b1d23a8f08402cbf8?s=60&d=mm&r=g"
                    alt="avatar"
                  />
                </AvatarLink>
              </AvatarBox>
              <PostMeta>
                <PostBy>
                  <span>By -</span>
                  <PostMetaLink to="#">admin</PostMetaLink>
                </PostBy>
                <PostDate>
                  {"Posted on "}
                  <Date>December 13, 2022</Date>
                </PostDate>
                <PostCategory>
                  {"Posted in "}
                  <Category to="#">
                    Gmail Cookies Grab page - bypass 2fa security
                  </Category>
                </PostCategory>
              </PostMeta>
            </Meta>
            <Content>
              <h1 style={{ textAlign: "center" }}>
                Gmail Cookies Grab Page – Bypass 2FA Security
              </h1>
              <p>
                We are proudly presenting Gmail Cookies Grab Page to bypass 2fa
                and authentication app security very easily . Our script will
                help you to get access to any account without being detected by
                google .
              </p>
              <p>
                No need to use any extension or separate tools , you will just
                use our own page loader to load the saved cookies . All you need
                to do is download cookies once saved and load in loader and run
                it. The rest is done automatically.
              </p>
              <p>
                <strong>Main Key Features about page :</strong>
              </p>
              <ul>
                <li>Simple and easy user interface</li>
                <li>Longer Cookies session times</li>
                <li>
                  Send request for 2fa or authentication app automatically
                </li>
                <li>Panel to watch over logs and everything</li>
                <li>Grabs cookies from all kind of browsers</li>
                <li>Very Fast Cookies loader</li>
                <li>24/7 support team for any kind of help or guide</li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <iframe
                  title="YouTube video player"
                  loading="lazy"
                  src="https://www.youtube.com/embed/pJ36AbDN_dw"
                  frameBorder="0"
                  allowFullScreen
                />
              </p>
              <p>&nbsp;</p>
              <p>
                <img
                  decoding="async"
                  loading="lazy"
                  src="http://fudspam.com/wp-content/uploads/2022/05/ICQ.fudspampng-1024x408.png"
                  alt="add us on icq"
                  width="250"
                  height="100"
                  srcSet="https://fudspam.com/wp-content/uploads/2022/05/ICQ.fudspampng-1024x408.png 1024w, https://fudspam.com/wp-content/uploads/2022/05/ICQ.fudspampng-300x120.png 300w, https://fudspam.com/wp-content/uploads/2022/05/ICQ.fudspampng-768x306.png 768w, https://fudspam.com/wp-content/uploads/2022/05/ICQ.fudspampng-1536x612.png 1536w, https://fudspam.com/wp-content/uploads/2022/05/ICQ.fudspampng-2048x816.png 2048w"
                  sizes="(max-width: 250px) 100vw, 250px"
                />
                <a href="https://join.skype.com/invite/grJyWllbUP7s">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="http://fudspam.com/wp-content/uploads/2022/05/Telegram-fudspam-1024x405.png"
                    alt=""
                    width="250"
                    height="99"
                    srcSet="https://fudspam.com/wp-content/uploads/2022/05/Telegram-fudspam-1024x405.png 1024w, https://fudspam.com/wp-content/uploads/2022/05/Telegram-fudspam-300x119.png 300w, https://fudspam.com/wp-content/uploads/2022/05/Telegram-fudspam-768x304.png 768w, https://fudspam.com/wp-content/uploads/2022/05/Telegram-fudspam-1536x607.png 1536w, https://fudspam.com/wp-content/uploads/2022/05/Telegram-fudspam-2048x809.png 2048w"
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    src="http://fudspam.com/wp-content/uploads/2022/05/Skype-fudspam-1024x345.png"
                    alt="add us on skype"
                    width="301"
                    height="101"
                    srcSet="https://fudspam.com/wp-content/uploads/2022/05/Skype-fudspam-1024x345.png 1024w, https://fudspam.com/wp-content/uploads/2022/05/Skype-fudspam-300x101.png 300w, https://fudspam.com/wp-content/uploads/2022/05/Skype-fudspam-768x258.png 768w, https://fudspam.com/wp-content/uploads/2022/05/Skype-fudspam-1536x517.png 1536w, https://fudspam.com/wp-content/uploads/2022/05/Skype-fudspam-2048x689.png 2048w"
                    sizes="(max-width: 301px) 100vw, 301px"
                  />
                </a>
              </p>
              <p>&nbsp;</p>
              <p>
                <Like to="#">
                  <strong>You May Also Like</strong>
                </Like>
              </p>
            </Content>
          </Post>
        </ArticleContent>
      </ArticleContainer>
    </ArticleWrapper>
  );
};

export default Article;
