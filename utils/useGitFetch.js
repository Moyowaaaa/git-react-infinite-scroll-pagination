import { useEffect, useState } from "react";
import axios from "axios";

const useGitfetch = ([page]) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const url = `https://api.github.com/search/repositories?q=created:>2021-09-13&sort=stars&order=desc&per_page=100&page=${page}`;

  const nextPage = async () => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        setRepositories(res.data.items), setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    nextPage();
  }, [page]);

  return { loading, error, repositories };
};

export default useGitfetch;
