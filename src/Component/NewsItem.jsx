import image from '../assets/fze.jpg'
export const NewsItem = ({title , description ,src , url}) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card bg-dark text-light mb-3 mx-3 p-2">
          <img src={src?src:image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-dark text-light mb-3 mx-3 p-2">
          <img src={src?src:image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-dark text-light mb-3 mx-3 p-2">
          <img src={src?src:image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem