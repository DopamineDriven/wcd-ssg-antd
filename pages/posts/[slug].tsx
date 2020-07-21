import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import Container from "../../components/container";
import FixedHeader from "../../components/header";
import AppLayout from "../../components/layout";


type Props = {
    post: PostType;
}