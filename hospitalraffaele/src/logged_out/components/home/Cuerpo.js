import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth,Card} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import vanguardia from "../../dummy_data/images/vanguardia.png"
import tecnologia from "../../dummy_data/images/Tecnologia.png"
import multidisciplina from "../../dummy_data/images/Multidisciplina.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '100%' // 16:9
    }
  }));

function Cuerpo(props) {
  const { width } = props;
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
        Hospital San Raffaele
        <br></br>
        <br></br>
        <Typography variant="body2" paragraph>
        San Raffaele es un Instituto Científico de Hospitalización y Atención y un policlínico universitario altamente especializado y reconocido internacionalmente, fundado en 1971 para brindar atención especializada y contribuir al desarrollo de nuevas terapias para muchas patologías.
        </Typography>
        </Typography>

     
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
          <Card style={{ width: '18rem' }}>
          <CardMedia
        className={classes.media}
        image={vanguardia}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Cuidado de vanguardia
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        La excelencia médico-científica del Hospital San Raffaele se deriva de la triple identidad del instituto, un lugar donde la investigación, la clínica y la educación universitaria interactúan a diario.
        </Typography>
      </CardContent>
        </Card>
            <Card style={{ width: '18rem' }}>
          <CardMedia
        className={classes.media}
        image={tecnologia}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Alta tecnología
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Desde robots quirúrgicos hasta instrumentos de radioterapia e imágenes de precisión: en el Hospital San Raffaele, las tecnologías de vanguardia permiten un diagnóstico cada vez más temprano y tratamientos más personalizados.
        </Typography>
      </CardContent>
        </Card>
        <Card style={{ width: '18rem' }}>
          <CardMedia
        className={classes.media}
        image={multidisciplina}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Enfoque multidisciplinario
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        En el Hospital San Raffaele, las enfermedades se tratan en 360 °, gracias a la presencia de varios especialistas que combinan sus habilidades al servicio del paciente.
        </Typography>
      </CardContent>
        </Card>
        
          </Grid>
        </div>
      </div>
    </div>
  );
}


export default Cuerpo;
