function getId() {
    let id = localStorage.getItem('ids');
        if (null === id) {
            id = 0;
        }
        id++;
        localStorage.setItem('ids', id);
        return id;
}

export default getId