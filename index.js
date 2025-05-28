function showEntry(week) {
      const entries = document.querySelectorAll('.entry');
      entries.forEach(entry => entry.style.display = 'none');
      document.getElementById(`week${week}`).style.display = 'block';
    }