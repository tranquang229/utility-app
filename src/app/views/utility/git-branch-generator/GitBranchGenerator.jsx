import React, { useState } from 'react'
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Icon,
    Radio,
    RadioGroup,
} from '@mui/material'
import { Span } from 'app/components/Typography'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { styled } from '@mui/system'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const useStyles = makeStyles((theme) => ({}))
const GitGenerator = () => {
    const classes = useStyles()
    const [gitBranchNameInput, setGitBranchNameInput] = useState('')
    const [gitBranchNameResult, setGitBranchNameResult] = useState('')
    const [typeOfTask, setTypeOfTask] = React.useState('feature')

    const handleRadioChange = (event) => {
        debugger
        setTypeOfTask(event.target.value)
    }

    const handleSubmit = (event) => {
        // debugger
        // setState({
        //     ...state,
        //     gitBranchNameResult: gitBranchNameInput
        //         .replace(/\s/g, '-')
        //         .replace(/'/g, '')
        //         .replace(/"/g, '-')
        //         .toLowerCase(),
        // })
        // console.log(state.gitBranchNameResult)
        // navigator.clipboard.writeText(gitBranchNameResult)
        setGitBranchNameResult(
            typeOfTask +
                '/' +
                gitBranchNameInput
                    .replace(/\s/g, '-')
                    .replace(/'/g, '')
                    .replace(/"/g, '-')
                    .toLowerCase()
        )
        navigator.clipboard.writeText(gitBranchNameResult)
    }

    // const handleChange = (event) => {
    //     event.persist()
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.value,
    //     })
    // }
    const handleGitBranchNameInputChange = (event) =>
        setGitBranchNameInput(event.target.value)

    const handleGitBranchNameResultChange = (event) =>
        setGitBranchNameResult(event.target.value)

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    mt={2}
                >
                    <Grid container xs={10}>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">
                                    Type of task
                                </FormLabel>
                                <RadioGroup
                                    aria-label="type-of-tag"
                                    name="controlled-radio-buttons-group"
                                    value={typeOfTask}
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel
                                        value="feature"
                                        control={<Radio />}
                                        label="Feature"
                                    />
                                    <FormControlLabel
                                        value="fixbug"
                                        control={<Radio />}
                                        label="Fix bug"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Name of branch"
                                type="text"
                                name="gitBranchNameInput"
                                id="git-branch-name-input"
                                onChange={handleGitBranchNameInputChange}
                                value={gitBranchNameInput}
                                validators={[
                                    'required',
                                    'minStringLength: 4',
                                    'maxStringLength: 200',
                                ]}
                                errorMessages={['This field is required']}
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Git Branch Name Result"
                                onChange={handleGitBranchNameResultChange}
                                type="text"
                                name="gitBranchNameResult"
                                value={gitBranchNameResult}
                                autoComplete="off"
                                // disabled
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                <Icon>send</Icon>
                                <Span
                                    sx={{ pl: 1, textTransform: 'capitalize' }}
                                >
                                    Submit
                                </Span>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </div>
    )
}

export default GitGenerator
