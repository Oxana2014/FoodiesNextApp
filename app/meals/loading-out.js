import classes from './loading.module.css'

export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching meals...</p>
}

// with changing file name from loading it now is not reserved and don't take in account by Next