import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import moviesData from "../../common/MoviesData";
import "./Home.css";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Box from "@mui/material/Box";
import artists from "./artists";
import genres from "./generes";

import {
    Input,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    FormGroup,
    InputLabel,
    TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
}));

export const MuiImageList = () => {
    const classes = useStyles();
    return (
        <ImageList
            sx={{ width: 350, height: 350 }}
            cols={4}
            rowHeight={164}
            style={{ width: "65rem" }}
        >
            {moviesData.map((item) => (
                <ImageListItem key={item.img}>
                    <img src={item.poster_url} alt={item.title} className="image" />
                    {
                        <ImageListItemBar
                            title={item.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${item.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    }
                </ImageListItem>
            ))}
        </ImageList>
    );
};
const ariaLabel = { "aria-label": "description" };

export default function InputsFunction() {
    const [age, setAge] = React.useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <span>FIND MOVIES BY:</span>
            <br />
            <Input placeholder="Movies Name" inputProps={ariaLabel} />
            <br />
            <div>
                <InputLabel id="demo-simple-select-autowidth-label">Generes</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                >
                    {genres.map(function (gene) {
                        return (
                            <FormGroup key={gene.id}>
                                <FormControlLabel
                                    control={<Checkbox value={gene.name} />}
                                    label={gene.name}
                                />
                            </FormGroup>
                        );
                    })}
                    Generes
                </Select>
            </div>
            <br />
            <div>
                <InputLabel id="demo-simple-select-autowidth-label">Artists</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                >
                    {artists.map(function (art) {
                        if (art === "none") {
                            return (
                                <MenuItem value="">
                                    {" "}
                                    <em>None</em>
                                </MenuItem>
                            );
                        } else {
                            return (
                                <FormGroup>
                                    <FormControlLabel
                                        key={art.id}
                                        control={<Checkbox />}
                                        label={art.first_name + art.last_name}
                                    />
                                </FormGroup>
                            );
                        }
                    })}
                    Generes
                </Select>
            </div>
            <TextField
                id="date"
                label="RELEASE DATE START"
                type="date"
                // defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br />
            <TextField
                id="date"
                label="RELEASE DATE END"
                type="date"
                // defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Box>
    );
}
