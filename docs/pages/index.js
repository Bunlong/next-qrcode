/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import { useQRCode } from 'react-hook-qrcode';

import Head from '../components/head';
import Nav from '../components/nav';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 14,
    paddingBottom: theme.spacing.unit * 9,
  },
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    marginTop: 20,
  },
  row: {
    padding: 7,
  },
  fieldset: {
    border: '1px solid #ccc',
    borderRadius: 5,
  },
  textField: {
    width: '100%',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: '0.5',
    background: '#CCC',
  },
});

const levelOptions = [
  { value: 'L', label: 'L' },
  { value: 'M', label: 'M' },
  { value: 'Q', label: 'Q' },
  { value: 'H', label: 'H' }
];

const renderAsOptions = [
  { value: 'canvas', label: 'Canvas' },
  { value: 'img', label: 'Image' },
];

const Index = (props) => {
  const [selectedLevel, setSelectedLevel] = useState({ value: 'L', label: 'L' });
  const [selectedRenderAs, setSelectedRenderAs] = useState({ value: 'canvas', label: 'Canvas' });
  const [displayDarkColorPicker, setDisplayDarkColorPicker] = useState(false);
  const [darkColor, setDarkColor] = useState('#010599FF');
  const [displayLightColorPicker, setDisplayLightColorPicker] = useState(false);
  const [lightColor, setLightColor] = useState('#FFBF60FF');
  const [text, setText] = useState('https://github.com/Bunlong/react-hook-qrcode');
  const [margin, setMargin] = useState(0);
  const [scale, setScale] = useState(0);
  const [width, setWidth] = useState(4);
  const [includeOptions, setIncludeOptions] = useState(true);
  const { classes } = props;
  const darkStyles = reactCSS({
    'default': {
      color: {
        width: '100%',
        height: '29px',
        borderRadius: '2px',
        background: `${ darkColor }`,
      },
      swatch: {
        width: '100%',
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  const lightStyles = reactCSS({
    'default': {
      color: {
        width: '100%',
        height: '29px',
        borderRadius: '2px',
        backgroundColor: `${lightColor}`,
      },
      swatch: {
        width: '100%',
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  const handleClickDark = () => {
    setDisplayDarkColorPicker(!displayDarkColorPicker);
  }

  const handleCloseDark = () => {
    setDisplayDarkColorPicker(false);
  }

  const handleChangeDark = (color) => {
    setDarkColor(color.hex);
  }

  const handleChangeLevel = (selectedLevel) => {
    setSelectedLevel(selectedLevel);
  }

  const handleChangeRenderAs = (selectedRenderAs) => {
    setSelectedRenderAs(selectedRenderAs);
  }

  const handleClickLight = () => {
    setDisplayLightColorPicker(!displayLightColorPicker);
  }

  const handleCloseLight = () => {
    setDisplayLightColorPicker(false);
  }

  const handleChangeLight = (color) => {
    setLightColor(color.hex);
  }

  const [inputRef] = useQRCode({
    text: text,
    options: {
      level: selectedLevel,
      margin: margin,
      scale: scale,
      width: width,
      color: {
        dark: darkColor,
        light: lightColor,
      },
    },
  });

  const handleChange = (event) => {
    const name = event.target.name
    if (name === 'text') {
      setText(event.target.value)
    } else if (name === 'margin') {
      setMargin(event.target.value)
    } else if (name === 'scale') {
      setScale(event.target.value)
    } else if (name === 'width') {
      setWidth(event.target.value)
    }
  }

  const handleChangeCheckbox = (event) => {
    setIncludeOptions(event.target.checked)
  }

  return (
    <div>
      <Head
        title="react-hook-qrcode"
        description="React hooks for generating QR code."
        keywords="react, qrcode, react-hooks, hooks, typescript, react-hook-qrcode, react-components, javascript, qrcode-generator"
      />
      <Nav />
      <div style={{ display: 'flex', margin: 40 }}>
        <Grid container spacing={24} direction="column">
          <Grid container item spacing={0} justify="center">
            <Grid item lg={6} xl={6} xs={12} style={{textAlign: 'center'}}>
              <Typography variant="h4" gutterBottom>
                DEMO
              </Typography>
              <hr/>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center" style={{paddingTop: 5, paddingBottom: 7}}>
            <Grid item lg={6} xl={6} xs={12}>
              <label>Render as:</label>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center" style={{ paddingTop: 7, paddingBottom: 7}}>
            <Grid item lg={6} xl={6} xs={12}>
            <Select
              value={selectedRenderAs}
              onChange={handleChangeRenderAs}
              options={renderAsOptions}
            />
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center" style={{paddingTop: 7, paddingBottom: 7}}>
            <Grid item lg={6} xl={6} xs={12}>
              <label>Text:</label>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center" style={{paddingTop: 7, paddingBottom: 7}}>
            <Grid item lg={6} xl={6} xs={12}>
              <TextField
                variant="outlined"
                multiline
                rows={4}
                value={text}
                className={classes.textField}
                onChange={handleChange}
                name='text'
              />
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center" style={{ paddingBottom: 5}}>
            <Grid item lg={6} xl={6} xs={12}>
              <label>Include Options:</label>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onChange={handleChangeCheckbox}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center" className={classes.row}>
            <Grid item lg={6} xl={6} xs={12}>
              <fieldset className={classes.fieldset}>
                <legend>Options</legend>
                <Grid container item spacing={0} justify="center" style={{ paddingTop: 15, paddingLeft: 7, paddingBottom: 7, paddingRight: 7}}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <label>Level:</label>
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <Select
                      value={selectedLevel}
                      onChange={handleChangeLevel}
                      options={levelOptions}
                      isDisabled={!includeOptions}
                    />
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <label>Margin:</label>
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <TextField
                      variant="outlined"
                      value={margin}
                      className={classes.textField}
                      name='margin'
                      onChange={handleChange}
                      disabled={includeOptions ? '' : 'disabled'}
                      type="number"
                    />
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <label>Scale:</label>
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <TextField
                      variant="outlined"
                      value={scale}
                      className={classes.textField}
                      name='scale'
                      onChange={handleChange}
                      disabled={includeOptions ? '' : 'disabled'}
                      type="number"
                    />
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <label>Width:</label>
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <TextField
                      variant="outlined"
                      value={width}
                      className={classes.textField}
                      name='width'
                      onChange={handleChange}
                      disabled={includeOptions ? '' : 'disabled'}
                      type="number"
                    />
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <label>Dark color:</label>
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <div style={ darkStyles.swatch } onClick={ handleClickDark }>
                      <div style={ darkStyles.color } />
                    </div>
                    { displayDarkColorPicker ? <div style={ darkStyles.popover }>
                      <div style={ darkStyles.cover } onClick={ handleCloseDark }/>
                      <SketchPicker color={ darkColor } onChange={ handleChangeDark } />
                    </div> : null }
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <label>Light color:</label>
                  </Grid>
                </Grid>
                <Grid container item spacing={0} justify="center" className={classes.row}>
                  <Grid item lg={12} xl={12} xs={12}>
                    <div style={ lightStyles.swatch } onClick={ handleClickLight }>
                      <div style={ lightStyles.color } />
                    </div>
                    { displayLightColorPicker ? <div style={ lightStyles.popover }>
                      <div style={ lightStyles.cover } onClick={ handleCloseLight }/>
                      <SketchPicker color={ lightColor } onChange={ handleChangeLight } />
                    </div> : null }
                  </Grid>
                </Grid>
              </fieldset>
            </Grid>
            <Grid container item spacing={0} justify="center" style={{paddingTop: 50}}>
              <Grid item lg={6} xl={6} xs={12} style={{textAlign: 'center'}}>
                {
                  selectedRenderAs.value === 'canvas' ? 
                    <canvas ref={inputRef} /> :
                    <img ref={inputRef} />
                }
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center" style={{paddingTop: 40}}>
              <Grid item lg={6} xl={6} xs={12} style={{textAlign: 'center'}}>
              <TextField
                variant="outlined"
                multiline
                rows={22}
                disabled
                className={classes.textField}
                value={`import React from 'react';
import { useQRCode } from 'react-hook-qrcode';

function App() {
    const [inputRef] = useQRCode({
        text: '${text}',
        ${
          includeOptions ? 
          `options: {
            level: '${selectedLevel.value}',
            margin: ${margin},
            scale: ${scale},
            width: ${width},
            color: {
                dark: '${darkColor}',
                light: '${lightColor}',
            },
          },` : ''
        }
    });

    return <${selectedRenderAs.value} ref={inputRef} />;
}

export default App;`}
              />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <footer>
        <div>
          react-hook-qrcode by <a href="https://github.com/Bunlong" target="_black">Bunlong</a>
        </div>
      </footer>
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
