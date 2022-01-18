import React, { useState } from 'react'
import { Button, Grid, Icon } from '@mui/material'
import { Span } from 'app/components/Typography'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { styled } from '@mui/system'
import { makeStyles } from '@mui/styles'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const useStyles = makeStyles((theme) => ({
    rootGitBranch: {
        display: 'flex',
        flexDirection: 'column',
    },
}))
const GitGenerator = () => {
    const classes = useStyles()
    const [state, setState] = useState({})

    const { gitBranchNameInput, gitBranchNameResult } = state

    const handleSubmit = (event) => {
        debugger
        setState({
            ...state,
            gitBranchNameResult: gitBranchNameInput
                .replace(/\s/g, '-')
                .replace(/'/g, '')
                .replace(/"/g, '-')
                .toLowerCase(),
        })
        console.log(state.gitBranchNameResult)
        navigator.clipboard.writeText(gitBranchNameResult)
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <div className={classes.rootGitBranch}>
                    <Grid container display="flex" justifyContent="center">
                        <Grid item lg={8} md={8} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Name of branch"
                                type="text"
                                name="gitBranchNameInput"
                                id="git-branch-name-input"
                                onChange={handleChange}
                                value={gitBranchNameInput || ''}
                                validators={[
                                    'required',
                                    'minStringLength: 4',
                                    'maxStringLength: 200',
                                ]}
                                errorMessages={['This field is required']}
                                autoComplete="off"
                            />
                            <TextField
                                label="Git Branch Name Result"
                                onChange={handleChange}
                                type="text"
                                name="gitBranchNameResult"
                                value={gitBranchNameResult || ''}
                                autoComplete="off"
                                // disabled
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            <Icon>send</Icon>
                            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                Submit
                            </Span>
                        </Button>
                    </Grid>
                </div>
            </ValidatorForm>
        </div>
    )
}

export default GitGenerator
