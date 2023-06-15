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

import icqImg from "../../../assets/images/icq.png";
import skypeImg from "../../../assets/images/skype.png";
import telegramImg from "../../../assets/images/telegram.png";
import article_img from "../../../assets/images/article_img.png";

const Article = () => {
  return (
    <ArticleWrapper>
      <ArticleContainer>
        <ArticleContent>
          <ImageBox to="#">
            <Image
              src={article_img}
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
                  src={icqImg}
                  alt="add us on icq"
                  width="250"
                  height="100"
                  sizes="(max-width: 250px) 100vw, 250px"
                />
                <a href="https://join.skype.com/invite/grJyWllbUP7s">
                  <img
                    decoding="async"
                    loading="lazy"
                    src={skypeImg}
                    alt=""
                    width="250"
                    height="99"
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    src={telegramImg}
                    alt="add us on skype"
                    width="301"
                    height="101"
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
