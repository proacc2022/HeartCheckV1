import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { Form } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { object, number } from "yup";

const schema = object({
  gender: number().required("Required").integer().moreThan(-1),
  age: number().required("Required").positive().integer(),
  education: number().required("Required").integer().moreThan(-1),
  smoker: number().required("Required").integer().moreThan(-1),
  cigs: number().required("Required"),
  bpMeds: number().required("Required").integer().moreThan(-1),
  stroke: number().required("Required").integer().moreThan(-1),
  stress: number().required("Required").integer().moreThan(-1),
  diabetes: number().required("Required").integer().moreThan(-1),
  cholesterol: number()
    .required("Required")
    .positive("Must be positive number"),
  sysbp: number().required("Required").positive("Must be positive number"),
  diabp: number().required("Required").positive("Must be positive number"),
  bmi: number().required("Required").positive("Must be positive number"),
  heartRate: number().required("Required").positive("Must be positive number"),
});

const EvalulateForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          gender: -1,
          age: undefined,
          education: -1,
          smoker: -1,
          cigs: undefined,
          bpMeds: -1,
          stroke: -1,
          stress: -1,
          diabetes: -1,
          cholesterol: undefined,
          sysbp: undefined,
          diabp: undefined,
          bmi: undefined,
          heartRate: undefined,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={schema}
      >
        {({ values, handleChange, setFieldValue, errors, touched }) => (
          <Form>
            <Grid container rowSpacing={2}>
              {/* Gender */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="gender-input">Gender</InputLabel>
                  <Select
                    labelId="gender-input"
                    id="gender-input"
                    value={values.gender}
                    label="Gender"
                    onChange={(e) => setFieldValue("gender", e.target.value)}
                    fullWidth
                    error={!!(errors.gender && touched.gender)}
                  >
                    <MenuItem value={-1}>
                      <em>Not specified</em>
                    </MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={0}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Age */}
              <Grid item xs={12}>
                <TextField
                  id="age-input"
                  label="Age"
                  variant="outlined"
                  value={values.age}
                  onChange={handleChange("age")}
                  fullWidth
                  error={!!(errors.age && touched.age)}
                  helperText={errors.age}
                />
              </Grid>
              {/* Education */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="education-input">Education</InputLabel>
                  <Select
                    labelId="education-input"
                    id="education-input"
                    value={values.education}
                    label="Education"
                    onChange={(e) => setFieldValue("education", e.target.value)}
                    fullWidth
                    error={!!(errors.education && touched.education)}
                  >
                    <MenuItem value={-1}>
                      <em>Not specified</em>
                    </MenuItem>
                    <MenuItem value={1}>Less than high school diploma</MenuItem>
                    <MenuItem value={2}>High school or GED</MenuItem>
                    <MenuItem value={3}>Some college (no degree)</MenuItem>
                    <MenuItem value={4}>Bachelor's degree or higher</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Smoking */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="smoker-input">Tobacco Smoker</InputLabel>
                  <Select
                    labelId="smoker-input"
                    id="smoker-input"
                    value={values.smoker}
                    label="Tobacco Smoker"
                    onChange={(e) => setFieldValue("smoker", e.target.value)}
                    fullWidth
                    error={!!(errors.smoker && touched.smoker)}
                  >
                    <MenuItem value={-1}>
                      <em>Not specified</em>
                    </MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Cigs per day */}
              <Grid item xs={12}>
                <TextField
                  id="cigs-input"
                  label="Cigarettes per day"
                  variant="outlined"
                  value={values.cigs}
                  onChange={handleChange("cigs")}
                  fullWidth
                  error={!!(errors.cigs && touched.cigs)}
                  helperText={errors.cigs}
                />
              </Grid>
              {/* BP Meds */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="bp-meds-input">
                    Blood pressure medication
                  </InputLabel>
                  <Select
                    labelId="bp-meds-input"
                    id="bp-meds-input"
                    value={values.bpMeds}
                    label="Blood pressure medication"
                    onChange={(e) => setFieldValue("bpMeds", e.target.value)}
                    fullWidth
                    error={!!(errors.bpMeds && touched.bpMeds)}
                  >
                    <MenuItem value={-1}>
                      <em>Not specified</em>
                    </MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Previous stroke */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="stroke-input">Previous stroke</InputLabel>
                  <Select
                    labelId="stroke-input"
                    id="stroke-input"
                    value={values.stroke}
                    label="Previous stroke"
                    onChange={(e) => setFieldValue("stroke", e.target.value)}
                    fullWidth
                    error={!!(errors.stroke && touched.stroke)}
                  >
                    <MenuItem value={-1}>
                      <em>Not specified</em>
                    </MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Hypertensive */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="stress-input">
                    Stress (hypertensive)
                  </InputLabel>
                  <Select
                    labelId="stress-input"
                    id="stress-input"
                    value={values.stress}
                    label="Stress (hypertensive)"
                    onChange={(e) => setFieldValue("stress", e.target.value)}
                    fullWidth
                    error={!!(errors.stress && touched.stress)}
                  >
                    <MenuItem value={-1}>
                      <em>Not specified</em>
                    </MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Diabetes */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="diabetes-input">Diabetes</InputLabel>
                  <Select
                    labelId="diabetes-input"
                    id="diabetes-input"
                    value={values.diabetes}
                    label="Diabetes"
                    onChange={(e) => setFieldValue("diabetes", e.target.value)}
                    fullWidth
                    error={!!(errors.diabetes && touched.diabetes)}
                  >
                    <MenuItem value={-1}>
                      <em>Not specified</em>
                    </MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Average cholesterol */}
              <Grid item xs={12}>
                <TextField
                  id="cholesterol-input"
                  label="Average cholesterol level"
                  variant="outlined"
                  value={values.cholesterol}
                  onChange={handleChange("cholesterol")}
                  fullWidth
                  error={!!(errors.cholesterol && touched.cholesterol)}
                  helperText={errors.cholesterol}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">mg/dL</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {/* Systolic BP */}
              <Grid item xs={12}>
                <TextField
                  id="sysbp-input"
                  label="Systolic Blood Pressure"
                  variant="outlined"
                  value={values.sysbp}
                  onChange={handleChange("sysbp")}
                  fullWidth
                  error={!!(errors.sysbp && touched.sysbp)}
                  helperText={errors.sysbp}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">mm Hg</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {/* Diastolic BP */}
              <Grid item xs={12}>
                <TextField
                  id="diabp-input"
                  label="Diastolic Blood Pressure"
                  variant="outlined"
                  value={values.diabp}
                  onChange={handleChange("diabp")}
                  fullWidth
                  error={!!(errors.diabp && touched.diabp)}
                  helperText={errors.diabp}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">mm Hg</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {/* BMI */}
              <Grid item xs={12}>
                <TextField
                  id="bmi-input"
                  label="BMI (Body Mass Index)"
                  variant="outlined"
                  value={values.bmi}
                  onChange={handleChange("bmi")}
                  fullWidth
                  error={!!(errors.bmi && touched.bmi)}
                  helperText={errors.bmi}
                />
              </Grid>
              {/* Avg heart rate */}
              <Grid item xs={12}>
                <TextField
                  id="heartRate-input"
                  label="Average Heart Rate"
                  variant="outlined"
                  value={values.heartRate}
                  onChange={handleChange("heartRate")}
                  fullWidth
                  error={!!(errors.heartRate && touched.heartRate)}
                  helperText={errors.heartRate}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">BPM</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<SendIcon />}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EvalulateForm;
