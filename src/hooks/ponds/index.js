import { useState, useEffect, useCallback } from 'react'
import { authenticatedApi } from '../../services/api'

export const usePonds = () => {
	const [ponds, setPonds] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchPonds = useCallback(async () => {
		try {
			const { data } = await authenticatedApi.get('/ponds')
			setPonds(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchPonds()
	}, [fetchPonds])

	return { ponds, loading, error }
}
