import React, { useReducer } from 'react'
import CancelButton from './CancelButton'
import SearchIcon from './SearchIcon'
import SearchInput from './SearchInput'
import './search.css';

export default () => {
    const [ state, setState ] = useReducer(reducer, {})

    function reducer (currentState, newState) {
        return { ...currentState, ...newState }
    }

    const {
        isDisplaySearch
    } = state

    function onSearchClick () {
        setState({ isDisplaySearch: !isDisplaySearch})
    }

    function onCancelClick () {
        setState({ 
            inputValue: undefined,
            isDisplaySearch: false,
        })
    }

    function onInputChange (e) {
        setState({ 
            inputValue: e.target.value,
        })
    }

    return (
        <div className="search" >
            <SearchIcon onSearchClick={onSearchClick}/>
            {isDisplaySearch &&
                <>
                    <SearchInput onInputChange={onInputChange}/>
                    <CancelButton text = "Cancel" onCancelClick={onCancelClick}/>
                </>
            }
        </div>
    )
}

