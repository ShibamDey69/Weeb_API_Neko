import axios from 'axios';


const animNnews = async (req, res) => {
  try {
  let response = await axios.get('https://api.consumet.org/news/ann/recent-feeds');
    return res.status(200).send({
      status: 200,
      response: "successful",
      data: response.data
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      response: "failed",
      message: "An Internal Error Occurred!!"
    });
  }
}

export default animNnews