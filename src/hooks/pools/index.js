import { useState, useEffect, useCallback } from 'react'
import { authenticatedApi } from '../../services/api'

export const usePools = () => {
	const [pools, setPools] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchPools = useCallback(async () => {
		try {
			const { data } = await authenticatedApi.get('/pools')
			setPools(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchPools()
	}, [fetchPools])

	return { pools, loading, error }
}
