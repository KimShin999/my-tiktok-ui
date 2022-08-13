//Layout
import { HeaderOnly } from "~/components/Layout";

//pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
// Public routes
const publicRoutes = [
  { path: "/", comment: Home },
  { path: "/following", comment: Following },
  { path: "/upload", comment: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
