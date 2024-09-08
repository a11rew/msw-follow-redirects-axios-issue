import axios from "axios";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

setupServer(
  http.get("http://test-site.com/", () =>
    HttpResponse.redirect("http://test-site.com/new-location")
  ),
  http.get("http://test-site.com/new-location", () =>
    HttpResponse.json("Welcome!")
  )
).listen();

const response = await axios.get("http://test-site.com/");

console.log(response.data);
