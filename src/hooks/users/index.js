import { useState, useEffect, useCallback } from 'react'
import { authenticatedApi } from '../../services/api'

export const useUsers = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchUsers = useCallback(async () => {
		try {
			const { data } = await authenticatedApi.get('/users')
			setUsers(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

	return { users, loading, error }
}
