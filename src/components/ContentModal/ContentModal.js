import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { img_500, unavailable, unavailableLandscape } from '../../config/config';
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import './ContentModal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "70%",
    height: "70%",
    backgroundColor: "#0d324d",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

const ContentModal = ( {children, media_type, id} ) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <button type="button" className="card" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        {content && (<div className={classes.paper}>
            <div className='content-modal'>
              <img 
                alt={content.name || content.title}
                className="modal-img-portrait" 
                src={content.poster_path?`${img_500}/${content.poster_path}` : unavailable} 
              />
              <img 
                alt={content.name || content.title}
                className="modal-img-landscape" 
                src={content.backdrop_path?`${img_500}/${content.backdrop_path}` : unavailableLandscape} 
              />
              <div className="modal-about">
                <span className='modal-title'>
                  {content.name || content.title} ({(content.first_air_date || content.release_date || "-----").substring(0, 4)})
                </span>
                {content.tagline && (<i className="modal-tagline">{content.tagline}</i>)}
                <span className="modal-description">
                  {content.overview}
                </span>

                <Button
                    style={{ fontFamily: 'Lato, sans-serif'}}
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                </Button>
              </div>
            </div>
          </div>)}
        </Fade>
      </Modal>
    </div>
  );
}

export default ContentModal;